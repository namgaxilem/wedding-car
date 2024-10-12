"use client";

import { http } from "@/api/http";
import { Section } from "@/layout/Section";
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";

export default function About() {
  const [about, setAbout] = useState<any>();

  useEffect(() => {
    http.get("/api/about").then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <Section>{about && <Markdown>{about.data.Content}</Markdown>}</Section>
  );
}
