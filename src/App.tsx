import React from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { RouteTransition } from "./components/RouteTransition";
import Home from "./home";
import About from "./about";
import Team from "./team";
import Impact from "./impact";
import Product from "./product";
import Blog from "./blog";
import BlogPost from "./blog-post";
import Contact from "./contact";
import Volunteer from "./volunteer";
import Partner from "./partner";
import Shop from "./shop";
import Checkout from "./checkout";
import AdminLogin from "./admin/login";
import BlogEditor from "./admin/blog-editor";
import NotFound from "./not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/impact" component={Impact} />
      <Route path="/product" component={Product} />
      <Route path="/shop" component={Shop} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/partner" component={Partner} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/blog-editor" component={BlogEditor} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <RouteTransition />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
