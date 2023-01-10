/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autoformat,
	BlockQuote,
	Bold,
	Code,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontSize,
	Heading,
	Highlight,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	Markdown,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	SimpleUploadAdapter,
	Strikethrough,
	Table,
	TableToolbar,
	TextTransformation
];

// eslint-disable-next-line no-undef
const csrfMeta = document.querySelector('meta[name="csrf-token"]');
const csrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'strikethrough',
			'highlight',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'fontBackgroundColor',
			'fontColor',
			'fontSize'
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4' },
			{ model: 'heading5', view: 'h5', title: 'Heading 5' },
			{ model: 'heading6', view: 'h6', title: 'Heading 6' },
		]
	},
	language: 'zh-cn',
	image: {
		toolbar: [
			'imageTextAlternative',
			'toggleImageCaption',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	simpleUpload: {
		uploadUrl: '/uploads',
		headers: {
			'X-CSRF-TOKEN': csrfToken
		}
	},
	fontColor: {
		colors: [
			{
				color: '#000000',
				label: 'Black'
			},
			{
				color: '#424242',
				label: 'Dim grey'
			},
			{
				color: '#757575',
				label: 'Grey'
			},
			{
				color: '#BDBDBD',
				label: 'Light grey'
			},
			{
				color: '#fff',
				label: 'White',
				hasBorder: true
			},
			{
				color: '#D50000',
				label: 'Red'
			},
			{
				color: '#E91E63',
				label: 'Pink'
			},
			{
				color: '#9C27B0',
				label: 'Purple'
			},
			{
				color: '#3F51B5',
				label: 'Indigo'
			},
			{
				color: '#2196F3',
				label: 'Blue'
			},
			{
				color: '#03A9F4',
				label: 'Light blue'
			},
			{
				color: '#018D00',
				label: 'Green'
			},
			{
				color: '#AEEA00',
				label: 'Light green'
			},
			{
				color: '#FFEB3B',
				label: 'Yellow'
			},
			{
				color: '#FF5722',
				label: 'Orange'
			}
		]
	},
};

export default Editor;
