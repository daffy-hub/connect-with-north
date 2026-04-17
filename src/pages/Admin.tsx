import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail, MailOpen, Trash2, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Session } from "@supabase/supabase-js";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingRole, setCheckingRole] = useState(true);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const { toast } = useToast();

  // Listen to auth state
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      if (newSession) {
        checkAdminRole(newSession.user.id);
      } else {
        setIsAdmin(false);
        setCheckingRole(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session: existing } }) => {
      setSession(existing);
      if (existing) {
        checkAdminRole(existing.user.id);
      } else {
        setCheckingRole(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminRole = async (userId: string) => {
    setCheckingRole(true);
    const { data, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();
    setIsAdmin(!error && !!data);
    setCheckingRole(false);
  };

  const fetchMessages = async () => {
    setLoadingMessages(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });
    setLoadingMessages(false);
    if (error) {
      toast({ title: "Couldn't load messages", description: error.message, variant: "destructive" });
      return;
    }
    setMessages(data ?? []);
  };

  useEffect(() => {
    if (isAdmin) fetchMessages();
  }, [isAdmin]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);

    if (authMode === "signup") {
      const redirectUrl = `${window.location.origin}/admin`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: redirectUrl },
      });
      setAuthLoading(false);
      if (error) {
        toast({ title: "Sign up failed", description: error.message, variant: "destructive" });
        return;
      }
      toast({
        title: "Account created",
        description: "Check your email to confirm, then ask an existing admin to grant you admin access.",
      });
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setAuthLoading(false);
      if (error) {
        toast({ title: "Login failed", description: error.message, variant: "destructive" });
        return;
      }
      toast({ title: "Welcome back" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setMessages([]);
    toast({ title: "Logged out" });
  };

  const toggleRead = async (msg: ContactMessage) => {
    const { error } = await supabase
      .from("contact_messages")
      .update({ is_read: !msg.is_read })
      .eq("id", msg.id);
    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
      return;
    }
    setMessages((m) => m.map((x) => (x.id === msg.id ? { ...x, is_read: !x.is_read } : x)));
  };

  const deleteMessage = async (id: string) => {
    const { error } = await supabase.from("contact_messages").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
      return;
    }
    setMessages((m) => m.filter((x) => x.id !== id));
    toast({ title: "Message deleted" });
  };

  // Not signed in
  if (!session) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <Card className="w-full max-w-md border-2 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl">
                <Lock className="mr-2 h-6 w-6 text-accent" />
                Admin Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="admin@truenorth.et"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    placeholder="Enter password"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={authLoading}>
                  {authLoading ? "Please wait..." : authMode === "login" ? "Login" : "Sign up"}
                </Button>
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                  className="text-sm text-muted-foreground hover:text-foreground w-full text-center"
                >
                  {authMode === "login" ? "Need an account? Sign up" : "Already have an account? Login"}
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  // Signed in but not admin
  if (!checkingRole && !isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <Card className="w-full max-w-md border-2 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-center">Access Denied</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-muted-foreground">
                Signed in as <strong>{session.user.email}</strong>, but this account isn't an admin.
              </p>
              <p className="text-sm text-muted-foreground">
                Ask an existing admin to grant you the <code>admin</code> role in the backend.
              </p>
              <Button variant="outline" onClick={handleLogout} className="w-full">
                Logout
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  // Admin view
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8 animate-fade-in flex-wrap gap-4">
              <div>
                <h1 className="text-4xl font-bold">Admin Panel</h1>
                <p className="text-sm text-muted-foreground mt-1">{session.user.email}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={fetchMessages} disabled={loadingMessages}>
                  <RefreshCw className={`mr-2 h-4 w-4 ${loadingMessages ? "animate-spin" : ""}`} />
                  Refresh
                </Button>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>

            <Card className="border-2 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Contact Messages</span>
                  <Badge variant="secondary">
                    {messages.filter((m) => !m.is_read).length} unread / {messages.length} total
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loadingMessages ? (
                  <p className="text-center text-muted-foreground py-8">Loading messages...</p>
                ) : messages.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    No messages yet. Submissions from the contact page will appear here.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <Card
                        key={msg.id}
                        className={`border ${!msg.is_read ? "border-accent bg-accent/5" : "border-border"}`}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-semibold text-lg">{msg.name}</h3>
                                {!msg.is_read && <Badge>New</Badge>}
                                <Badge variant="outline" className="capitalize">{msg.subject}</Badge>
                              </div>
                              <a href={`mailto:${msg.email}`} className="text-sm text-muted-foreground hover:text-accent break-all">
                                {msg.email}
                              </a>
                            </div>
                            <div className="text-xs text-muted-foreground whitespace-nowrap">
                              {new Date(msg.created_at).toLocaleString("en-GB", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })}
                            </div>
                          </div>
                          <p className="text-sm whitespace-pre-wrap mb-4">{msg.message}</p>
                          <div className="flex gap-2 flex-wrap">
                            <Button size="sm" variant="outline" onClick={() => toggleRead(msg)}>
                              {msg.is_read ? (
                                <>
                                  <Mail className="mr-2 h-4 w-4" /> Mark unread
                                </>
                              ) : (
                                <>
                                  <MailOpen className="mr-2 h-4 w-4" /> Mark as read
                                </>
                              )}
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <a href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}>
                                Reply
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-destructive hover:text-destructive"
                              onClick={() => deleteMessage(msg.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
