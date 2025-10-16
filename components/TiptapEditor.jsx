// FILE: components/TiptapEditor.jsx

'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import { Controller } from 'react-hook-form';
import { useCallback, useRef } from 'react';
import toast from 'react-hot-toast';
import useAxiosSecure from '../Hooks/useAxiosSecure';

// --- TIPTAP EXTENSIONS ---
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { TextStyle } from '@tiptap/extension-text-style';

// --- ICONS ---
import { FaBold, FaItalic, FaStrikethrough, FaLink, FaListUl, FaListOl, FaQuoteLeft, FaImage, FaUndo, FaRedo } from 'react-icons/fa';
import FontSize from './ FontSize';

const Toolbar = ({ editor }) => {
  const axiosSecure = useAxiosSecure();
  const fileInputRef = useRef(null);

  const setLink = useCallback(() => { /* ... (code is correct) ... */ }, [editor]);
  const handleFileChange = async (event) => { /* ... (code is correct) ... */ };
  const triggerImageUpload = () => { fileInputRef.current?.click(); };
  
  const handleFontSizeChange = (event) => {
    const size = event.target.value;
    // Call our new custom command
    if (size) {
      editor.chain().focus().setFontSize(size).run();
    } else {
      editor.chain().focus().unsetFontSize().run();
    }
  };
  
  const currentFontSize = editor?.getAttributes('textStyle').fontSize || '';

  if (!editor) {
    return null;
  }
  
  return (
    <div className="p-2 border border-gray-300 bg-gray-50 rounded-t-lg flex flex-wrap items-center gap-2">
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
      <select 
        onChange={handleFontSizeChange} 
        value={currentFontSize}
        className="p-1.5 border border-gray-300 rounded-md text-sm focus:ring-yellow-400 focus:border-yellow-400"
      >
        <option value="">Default Size</option>
        <option value="12px">Small</option>
        <option value="14px">Normal</option>
        <option value="18px">Medium</option>
        <option value="24px">Large</option>
      </select>
      <div className="w-[1px] h-6 bg-gray-300 mx-2"></div>
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-300' : 'hover:bg-gray-200'}`}><FaBold /></button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-300' : 'hover:bg-gray-200'}`}><FaItalic /></button>
      <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={`p-2 rounded ${editor.isActive('strike') ? 'bg-gray-300' : 'hover:bg-gray-200'}`}><FaStrikethrough /></button>
      <button type="button" onClick={setLink} className={`p-2 rounded ${editor.isActive('link') ? 'bg-gray-300' : 'hover:bg-gray-200'}`}><FaLink /></button>
      <div className="w-[1px] h-6 bg-gray-300 mx-2"></div>
      <button type="button" onClick={triggerImageUpload} className="p-2 rounded hover:bg-gray-200"><FaImage /></button>
      <div className="w-[1px] h-6 bg-gray-300 mx-2"></div>
      <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-gray-300' : 'hover:bg-gray-200'}`}><FaListUl /></button>
      <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-gray-300' : 'hover:bg-gray-200'}`}><FaListOl /></button>
      <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`p-2 rounded ${editor.isActive('blockquote') ? 'bg-gray-300' : 'hover:bg-gray-200'}`}><FaQuoteLeft /></button>
      <div className="w-[1px] h-6 bg-gray-300 mx-2"></div>
      <button type="button" onClick={() => editor.chain().focus().undo().run()} className="p-2 rounded hover:bg-gray-200"><FaUndo /></button>
      <button type="button" onClick={() => editor.chain().focus().redo().run()} className="p-2 rounded hover:bg-gray-200"><FaRedo /></button>
    </div>
  );
};

const TiptapEditor = ({ name, control, defaultValue = null }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        const editor = useEditor({
          extensions: [
            StarterKit,
            Image,
            Link.configure({ openOnClick: false }),
            
            // This is the final, correct order.
            // 1. Load the official extension that creates the 'textStyle' mark.
            TextStyle, 
            // 2. Load our custom extension that adds attributes and commands to it.
            FontSize,
          ],
          content: field.value,
          onUpdate: ({ editor }) => {
            field.onChange(!editor.isEmpty ? editor.getJSON() : null);
          },
          editorProps: {
            attributes: {
              class: 'prose prose-sm sm:prose-base max-w-none focus:outline-none p-4 min-h-[250px]',
            },
          },
          immediatelyRender: false,
        });

        return (
          <div>
            <div className="border border-gray-300 rounded-lg">
              <Toolbar editor={editor} />
              <EditorContent editor={editor} className="bg-white rounded-b-lg" />
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
          </div>
        );
      }}
    />
  );
};

export default TiptapEditor;