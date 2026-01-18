'use client';
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubscriptionButton from "@/components/SubscriptionButton";

export default function Home() {
  return (
    <>
    <SubscriptionButton />
    <BlogList />
    </>
  );
}
