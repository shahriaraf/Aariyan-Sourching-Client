// FILE: components/TiptapRenderer.jsx
'use client';
import { useMemo } from 'react';
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { TextStyle } from '@tiptap/extension-text-style';
import FontSize from './ FontSize';

const TiptapRenderer = ({ jsonContent }) => {
  const outputHtml = useMemo(() => {
    if (!jsonContent || typeof jsonContent !== 'object' || !jsonContent.type) {
      return '';
    }
    try {
      return generateHTML(jsonContent, [
        StarterKit,
        Image,
        Link,
        TextStyle, // <-- Add TextStyle
        FontSize,   // <-- Add FontSize
      ]);
    } catch (error) {
      console.error("TiptapRenderer: Failed to generate HTML", error);
      return '<p style="color: red;">Error rendering content.</p>';
    }
  }, [jsonContent]);

  if (!outputHtml) return null;
  
  return <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: outputHtml }} />;
};

export default TiptapRenderer;