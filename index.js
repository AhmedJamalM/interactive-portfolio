{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState, useEffect, useCallback \} from 'react';\
import \{ Folder, User, Mail, Image, Film, Sparkles, X, ChevronLeft, Minus, Maximize, Glasses, Layers, Box, PaintBucket, Music, Camera \} from 'lucide-react';\
\
// --- CONFIGURATION DATA ---\
const NAV_ITEMS = [\
  \{ id: 'projects', name: 'Projects', icon: Folder, color: 'text-blue-500' \},\
  \{ id: 'about', name: 'About Me', icon: User, color: 'text-green-500' \},\
  \{ id: 'contact', icon: Mail, color: 'text-purple-500', name: 'Contact' \},\
];\
\
/**\
 * Update this PROJECTS_DATA array with your actual project details.\
 * * URL Pattern: https://<USERNAME>.github.io/<REPOSITORY_NAME>/<FILE_PATH>\
 */\
const PROJECTS_DATA = [\
  // 1. PHYSICAL ART: SCULPTURE\
  \{ id: 'sculpture', title: 'Sculpture', icon: Image, color: 'text-yellow-500', \
    items: [\
      \{ \
        name: 'Terra Cotta Study', \
        preview: 'https://ahmedjamalm.github.io/portfolio-media/terra-cotta-study.jpg', \
        content: 'A deep dive into classical clay modeling techniques, focusing on texture and form. This piece challenges traditional boundaries by integrating digital planning into the physical modeling process.',\
        mediaType: 'image',\
        mediaUrl: 'https://ahmedjamalm.github.io/portfolio-media/terra-cotta-study.jpg'\
      \},\
      \{ \
        name: 'Wireframe Abstraction', \
        preview: 'https://placehold.co/600x400/F97316/FFFFFF?text=Sculpture+B', \
        content: 'Minimalist piece exploring positive and negative space using industrial steel wires. The final presentation involves custom lighting to cast complex shadows.',\
        mediaType: 'image',\
        mediaUrl: 'https://placehold.co/800x600/F97316/FFFFFF?text=FINAL+IMAGE+B'\
      \},\
      \{ \
        name: 'My First Upload', \
        preview: 'https://placehold.co/600x400/000000/FFFFFF?text=YOUR+PREVIEW+IMAGE', \
        content: 'This project demonstrates the successful integration of an externally hosted asset into the portfolio structure.',\
        mediaType: 'image',\
        mediaUrl: 'https://placehold.co/800x600/000000/FFFFFF?text=YOUR+FULL+IMAGE'\
      \},\
    ]\
  \},\
  // 2. PHYSICAL ART: CERAMICS\
  \{ id: 'ceramics', title: 'Ceramics', icon: PaintBucket, color: 'text-orange-500', \
    items: [\
      \{ \
        name: 'Glaze Experiments', \
        preview: 'https://placehold.co/600x400/F97316/FFFFFF?text=CERAMICS+PREVIEW', \
        content: 'Exploring temperature effects and mineral pigments on stoneware, focusing on crystalline glazes. This project emphasizes material science in art.',\
        mediaType: 'image',\
        mediaUrl: 'https://placehold.co/800x600/F97316/FFFFFF?text=FINAL+CERAMICS+WORK'\
      \},\
    ]\
  \},\
  // --- DIGITAL PAINTING ---\
  \{ id: 'digital_painting', title: 'Digital Painting', icon: PaintBucket, color: 'text-blue-500',\
    items: [\
        \{\
            name: 'Aurora Borealis Study',\
            preview: 'https://your-image-host.com/digital-painting-aurora-small.jpg', \
            content: 'A vibrant digital landscape focusing on light and atmosphere, painted using Procreate/Photoshop layers. Explores volumetric lighting techniques.',\
            mediaType: 'image',\
            mediaUrl: 'https://your-image-host.com/digital-painting-aurora-large.jpg'\
        \},\
        \{\
            name: 'Portrait of Jane Doe',\
            preview: 'https://your-image-host.com/digital-portrait-small.jpg',\
            content: 'Hyper-realistic portraiture focused on subtle skin tone variations and hair rendering. A year-long study in digital texture.',\
            mediaType: 'image',\
            mediaUrl: 'https://your-image-host.com/digital-portrait-large.jpg'\
        \}\
    ]\
  \},\
  // 3. DIGITAL MEDIA: VIDEO\
  \{ id: 'video', title: 'Video', icon: Film, color: 'text-red-500', \
    items: [\
      \{ \
        name: 'Urban Flow Short', \
        preview: 'https://placehold.co/600x400/EF4444/FFFFFF?text=Video+A', \
        content: 'A kinetic montage of city life, using fast cuts and high contrast filters. This was a challenging project focused on timing and audio design.',\
        mediaType: 'video',\
        mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' \
      \},\
      \{ \
        name: 'Conceptual Loop', \
        preview: 'https://placehold.co/600x400/6366F1/FFFFFF?text=Video+B', \
        content: 'An infinite video loop studying repetition and gradual decay of visual information. This project was first exhibited in the 2024 Digital Art Expo.',\
        mediaType: 'video',\
        mediaUrl: 'https://www.youtube.com/embed/x-0k0204t3o' \
      \},\
    ]\
  \},\
  // 4. DIGITAL MEDIA: PHOTOGRAPHY\
  \{ id: 'photo', title: 'Photography', icon: Camera, color: 'text-teal-500', \
    items: [\
      \{\
        name: 'Street Series: NYC',\
        preview: 'https://placehold.co/600x400/0D9488/FFFFFF?text=PHOTO+PREVIEW',\
        content: 'A documentary series capturing fleeting moments of urban life, emphasizing contrast and solitude in crowded spaces.',\
        mediaType: 'image',\
        mediaUrl: 'https://placehold.co/800x600/0D9488/FFFFFF?text=FINAL+PHOTO+WORK'\
      \},\
      \{\
        name: 'Dandelion Macro Study',\
        preview: 'https://ahmedjamalm.github.io/portfolio-media/dandelion_prvw',\
        content: 'An extreme close-up photograph capturing the delicate structures and texture of a dandelion head, highlighting focus stacking and natural light techniques.',\
        mediaType: 'image',\
        mediaUrl: 'https://ahmedjamalm.github.io/portfolio-media/dandelion_prvw'\
      \}\
    ]\
  \},\
  // 5. DIGITAL MEDIA: ANIMATION\
  \{ id: 'animation', title: 'Animation', icon: Sparkles, color: 'text-pink-500', \
    items: [\
      \{ \
        name: 'Procedural Grass', \
        preview: 'https://placehold.co/600x400/EC4899/FFFFFF?text=Animation+A', \
        content: 'VFX experiment on procedural generation of natural elements using Blender nodes. The goal was photo-realism without manual asset placement.',\
        mediaType: 'image',\
        mediaUrl: 'https://placehold.co/800x600/EC4899/FFFFFF?text=FINAL+RENDER'\
      \},\
      // --- VIMEO VIDEO ENTRY ---\
      \{ \
        name: 'Infinite Loop Prison', \
        // Github Pages Thumbnail\
        preview: 'https://ahmedjamalm.github.io/portfolio-media/infinite-loop-thumbnail.jpg', \
        content: 'A short animated film exploring a specific narrative and animation technique. Playing via Vimeo.',\
        mediaType: 'video',\
        // VIMEO embed URL\
        mediaUrl: 'https://player.vimeo.com/video/1140064268?badge=0&autopause=0&player_id=0&app_id=58479&loop=1',\
        // Custom aspect ratio (66.67% for 3:2)\
        aspectRatio: '66.67%'\
      \},\
    ]\
  \},\
  // 6. INTERACTIVE: VIRTUAL REALITY\
  \{ id: 'virtual_reality', title: 'Virtual Reality', icon: Glasses, color: 'text-indigo-500', \
    items: [\
      \{\
        name: 'The Infinite Loop VR',\
        preview: 'https://placehold.co/600x400/6366F1/FFFFFF?text=VR+PREVIEW',\
        content: 'An interactive VR experience (Unity/Oculus) exploring non-Euclidean space and sensory overload. Project exhibited at the Digital Futures Lab.',\
        mediaType: 'video', \
        mediaUrl: 'https://www.youtube.com/embed/S_T1w_G8lSg' \
      \}\
    ]\
  \},\
  // 7. INTERACTIVE: AUGMENTED REALITY\
  \{ id: 'augmented_reality', title: 'Augmented Reality', icon: Layers, color: 'text-cyan-500', \
    items: [\
      \{\
        name: 'AR Geo-Cache Art',\
        preview: 'https://placehold.co/600x400/06B6D4/FFFFFF?text=AR+PREVIEW',\
        content: 'Public art installation utilizing ARKit/ARCore, placing hidden digital sculptures in city parks accessible only via a smartphone camera.',\
        mediaType: 'image',\
        mediaUrl: 'https://placehold.co/800x600/06B6D4/FFFFFF?text=AR+MOCKUP'\
      \}\
    ]\
  \},\
  // 8. DIGITAL ASSETS: 3D MODELS\
  \{ id: 'models', title: '3D Models', icon: Box, color: 'text-lime-500', \
    items: [\
      \{\
        name: 'Archived Assets Pack',\
        preview: 'https://placehold.co/600x400/84CC16/FFFFFF?text=MODEL+PREVIEW',\
        content: 'A collection of high-poly and low-poly assets created for game development and cinematics, demonstrating proficiency in Maya and Substance Painter.',\
        mediaType: 'image',\
        mediaUrl: 'https://placehold.co/800x600/84CC16/FFFFFF?text=MODEL+SHEET'\
      \}\
    ]\
  \},\
  // 9. AUDIO: MUSIC/SOUND\
  \{ id: 'music', title: 'Music/Sound', icon: Music, color: 'text-fuchsia-500', \
    items: [\
      \{\
        name: 'Generative Soundscapes',\
        preview: 'https://placehold.co/600x400/E879F9/FFFFFF?text=MUSIC+PREVIEW',\
        content: 'An experimental album exploring generative music and ambient composition using Max/MSP. The final work is an infinitely looping audio file.',\
        mediaType: 'video', \
        mediaUrl: 'https://www.youtube.com/embed/1O0E-w3sB2c'\
      \}\
    ]\
  \},\
];\
\
const GENERAL_CONTENT = \{\
    'about': (\
        <div className="p-8 space-y-4 bg-gray-50 rounded-lg shadow-inner">\
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">About Ahmed Malik</h3>\
            <p className="text-gray-600">Ahmed Malik is a multidisciplinary artist and technologist exploring the boundaries between the digital and the physical. Their work blends mediums like film, sculpture, animation, sound, and virtual reality to question perception, identity, and the structures\'97both cultural and computational\'97that shape our world.</p>\
            <p className="text-gray-600">For collaboration inquiries, please use the contact link below.</p>\
        </div>\
    ),\
    'contact': (\
        <div className="p-8 space-y-4 bg-gray-50 rounded-lg shadow-inner">\
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">System Access Protocol</h3>\
            <p className="text-gray-600">Email: <span className="font-mono text-blue-600">contact@digitalvoid.art</span></p>\
            <p className="text-gray-600">Social: <span className="font-mono text-blue-600">@dorksense_art</span> (links not active in this simulation)</p>\
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600 transition duration-150">Send Message Request</button>\
        </div>\
    )\
\};\
\
// --- HELPER COMPONENTS ---\
\
const FolderIcon = (\{ folder, onMouseEnter, onMouseLeave, onClick \}) => \{\
    const IconComponent = folder.icon;\
    \
    return (\
        <div \
            className="flex flex-col items-center p-3 w-28 cursor-pointer hover:bg-blue-100/70 rounded-lg transition-colors duration-150"\
            onMouseEnter=\{() => onMouseEnter(folder)\}\
            onMouseLeave=\{onMouseLeave\}\
            onClick=\{onClick\} \
        >\
            <IconComponent className=\{`w-12 h-12 $\{folder.color\} drop-shadow-md`\} strokeWidth=\{1.5\}/>\
            <span className="text-xs font-medium text-center mt-1 p-0.5 bg-white/70 rounded-sm">\{folder.title\}</span>\
        </div>\
    );\
\};\
\
// --- FINDER WINDOW COMPONENT ---\
\
const FinderWindow = (\{ \
    setActiveView, \
    activeNav, \
    setActiveNav, \
    activeProjectSubfolder, \
    setActiveProjectSubfolder \
\}) => \{\
    const [hoveredProject, setHoveredProject] = useState(null);\
\
    const activeFolder = PROJECTS_DATA.find(f => f.id === activeProjectSubfolder);\
    const activeProjectItems = activeFolder ? activeFolder.items : [];\
\
    const getProjectDetail = useCallback(() => \{\
        if (!hoveredProject) \{\
            return \{ title: 'Select a Project', content: 'Hover over a file icon in the right column to view its preview and description here.' \};\
        \}\
        return \{\
            title: hoveredProject.name,\
            content: (\
                <div className="space-y-4">\
                    <img \
                        src=\{hoveredProject.preview\} \
                        alt=\{hoveredProject.name\} \
                        className="w-full h-auto rounded-lg shadow-md border-2 border-gray-300" \
                        onError=\{(e) => \{ e.target.onerror = null; e.target.src="https://placehold.co/600x400/FF0000/FFFFFF?text=PREVIEW+ERROR" \}\}\
                    />\
                    <p className="text-sm text-gray-700">\{hoveredProject.content\}</p>\
                </div>\
            )\
        \};\
    \}, [hoveredProject]);\
    \
    const detailContent = getProjectDetail();\
\
    return (\
        <div className="w-full h-full bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-300">\
            \{/* Window Header (Traffic Lights) */\}\
            <div className="flex items-center p-2 border-b bg-gray-100">\
                <div className="flex space-x-2">\
                    <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-600" onClick=\{() => setActiveView('closed')\}></div>\
                    <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600"></div>\
                    <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600"></div>\
                </div>\
                <div className="flex-1 text-center text-sm font-semibold text-gray-700">\
                    \{activeNav === 'projects' ? `Projects > $\{activeFolder?.title || ''\}` : activeNav.charAt(0).toUpperCase() + activeNav.slice(1)\}\
                </div>\
                <div className="flex space-x-2 opacity-0">\
                    <Minus className="w-4 h-4 text-gray-500" />\
                    <Maximize className="w-4 h-4 text-gray-500" />\
                    <X className="w-4 h-4 text-gray-500" />\
                </div>\
            </div>\
\
            \{/* Main Content Area: Three Columns */\}\
            <div className="flex-1 flex overflow-hidden">\
                \{/* 1. Sidebar */\}\
                <div className="w-56 bg-gray-200 border-r border-gray-300 p-2 space-y-1 overflow-y-auto">\
                    <h4 className="text-xs font-bold text-gray-500 uppercase px-2 py-1 mt-2">Favorites</h4>\
                    \{NAV_ITEMS.map(item => \{\
                        const Icon = item.icon;\
                        return (\
                            <div\
                                key=\{item.id\}\
                                className=\{`flex items-center p-2 rounded-lg cursor-pointer transition-colors duration-150 $\{\
                                    activeNav === item.id ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-gray-300 text-gray-700'\
                                \}`\}\
                                onClick=\{() => \{\
                                    setActiveNav(item.id);\
                                    setHoveredProject(null);\
                                \}\}\
                            >\
                                <Icon className=\{`w-5 h-5 mr-3 $\{activeNav === item.id ? 'text-white' : item.color\}`\} />\
                                <span className="font-medium">\{item.name\}</span>\
                            </div>\
                        );\
                    \})\}\
                </div>\
\
                \{/* 2. Content Column */\}\
                <div className="w-64 bg-white border-r border-gray-300 p-4 overflow-y-auto">\
                    \{activeNav === 'projects' ? (\
                        <div className="space-y-4">\
                            <h4 className="text-xs font-bold text-gray-500 uppercase">Sub-Projects</h4>\
                            \{PROJECTS_DATA.map(folder => \{\
                                const Icon = folder.icon;\
                                return (\
                                    <div\
                                        key=\{folder.id\}\
                                        className=\{`flex items-center p-2 rounded-lg cursor-pointer transition-colors duration-150 $\{\
                                            activeProjectSubfolder === folder.id ? 'bg-blue-100' : 'hover:bg-gray-100'\
                                        \}`\}\
                                        onClick=\{() => setActiveProjectSubfolder(folder.id)\}\
                                    >\
                                        <Icon className=\{`w-5 h-5 mr-3 $\{folder.color\}`\} />\
                                        <span className="font-medium">\{folder.title\}</span>\
                                        <ChevronLeft className="w-4 h-4 ml-auto text-gray-500 rotate-180" />\
                                    </div>\
                                );\
                            \})\}\
                        </div>\
                    ) : (\
                        <div className="p-4 pt-10">\
                            \{GENERAL_CONTENT[activeNav]\}\
                        </div>\
                    )\}\
                </div>\
\
                \{/* 3. Detail Column */\}\
                <div className="flex-1 bg-white p-4 flex flex-col overflow-y-auto">\
                    \{activeNav === 'projects' ? (\
                        <>\
                            <div className="flex flex-wrap gap-4 mb-6">\
                                \{activeProjectItems.map((item, index) => (\
                                    <FolderIcon\
                                        key=\{index\}\
                                        folder=\{\{ title: item.name, icon: item.mediaType === 'video' ? Film : Image, color: 'text-gray-700' \}\}\
                                        onMouseEnter=\{() => setHoveredProject(item)\}\
                                        onMouseLeave=\{() => setHoveredProject(null)\}\
                                        onClick=\{() => setActiveView(\{ type: 'project', data: item \})\}\
                                    />\
                                ))\}\
                            </div>\
                            \
                            <h4 className="text-xs font-bold text-gray-500 uppercase border-b pb-1 mb-4">File Preview</h4>\
                            <div className="flex-1">\
                                \{typeof detailContent.content === 'string' ? (\
                                    <p className="text-gray-500 italic mt-8 text-center">\{detailContent.content\}</p>\
                                ) : (\
                                    detailContent.content\
                                )\}\
                            </div>\
                        </>\
                    ) : (\
                        <div className="p-4 pt-10">\
                            \{GENERAL_CONTENT[activeNav]\}\
                        </div>\
                    )\}\
                </div>\
            </div>\
        </div>\
    );\
\};\
\
// --- PROJECT DETAIL PAGE COMPONENT ---\
\
const ProjectDetailPage = (\{ project, setActiveView \}) => \{\
    const MediaRenderer = (\{ project \}) => \{\
        if (project.mediaType === 'video') \{\
            const aspectRatio = project.aspectRatio || '56.25%';\
            \
            return (\
                <div className="relative rounded-lg overflow-hidden shadow-xl" style=\{\{ paddingTop: aspectRatio \}\}>\
                    <iframe\
                        className="absolute top-0 left-0 w-full h-full"\
                        src=\{project.mediaUrl\}\
                        title=\{`Video: $\{project.name\}`\}\
                        referrerPolicy="strict-origin-when-cross-origin"\
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"\
                        allowFullScreen\
                        frameBorder="0"\
                    ></iframe>\
                </div>\
            );\
        \}\
\
        return (\
            <img \
                src=\{project.mediaUrl || project.preview\} \
                alt=\{project.name\} \
                className="w-full h-auto rounded-lg shadow-xl" \
                onError=\{(e) => \{ e.target.onerror = null; e.target.src="https://placehold.co/800x600/FF0000/FFFFFF?text=MEDIA+LOAD+ERROR" \}\}\
            />\
        );\
    \};\
\
    return (\
        <div className="p-8 w-full h-full bg-gray-100 rounded-xl shadow-2xl flex flex-col overflow-y-auto">\
            <header className="flex items-center justify-between pb-4 border-b mb-6">\
                <button \
                    onClick=\{() => setActiveView('finder')\} \
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-150"\
                >\
                    <ChevronLeft className="w-5 h-5 mr-1" />\
                    Back to Finder\
                </button>\
                <h1 className="text-3xl font-bold text-gray-800">\{project.name\}</h1>\
                <div className="w-24"></div> \{/* Spacer */\}\
            </header>\
\
            <div className="grid md:grid-cols-2 gap-8 flex-1">\
                <div className="md:col-span-1">\
                    <h2 className="text-xl font-semibold mb-3 border-l-4 border-blue-500 pl-2">Visual Showcase</h2>\
                    <MediaRenderer project=\{project\} />\
                </div>\
                <div className="md:col-span-1 space-y-6">\
                    <h2 className="text-xl font-semibold mb-3 border-l-4 border-blue-500 pl-2">Project Description</h2>\
                    <p className="text-gray-700 leading-relaxed text-lg">\{project.content\}</p>\
                    <div className="bg-white p-4 rounded-md shadow-inner border">\
                        <h3 className="font-bold text-gray-800">Metadata</h3>\
                        <p className="text-sm text-gray-600">Type: \{project.name.includes('Study') || project.name.includes('Experiments') ? 'Conceptual' : 'Production'\}</p>\
                        <p className="text-sm text-gray-600">Category: \{project.name.includes('VR') || project.name.includes('AR') ? 'Interactive' : 'Media'\}</p>\
                    </div>\
                </div>\
            </div>\
        </div>\
    );\
\}\
\
// --- MAIN APP COMPONENT ---\
\
const App = () => \{\
    const [activeView, setActiveView] = useState('finder');\
    const [activeNav, setActiveNav] = useState('projects');\
    const [activeProjectSubfolder, setActiveProjectSubfolder] = useState(PROJECTS_DATA[0].id);\
    const [isDragging, setIsDragging] = useState(false);\
    const [position, setPosition] = useState(\{ x: 50, y: 50 \});\
    const [offset, setOffset] = useState(\{ x: 0, y: 0 \});\
\
    const handleMouseDown = (e) => \{\
        setIsDragging(true);\
        setOffset(\{\
            x: e.clientX - position.x,\
            y: e.clientY - position.y,\
        \});\
    \};\
\
    const handleMouseMove = useCallback((e) => \{\
        if (!isDragging) return;\
        setPosition(\{\
            x: e.clientX - offset.x,\
            y: e.clientY - offset.y,\
        \});\
    \}, [isDragging, offset]);\
\
    const handleMouseUp = useCallback(() => \{\
        setIsDragging(false);\
    \}, []);\
\
    useEffect(() => \{\
        if (isDragging) \{\
            window.addEventListener('mousemove', handleMouseMove);\
            window.addEventListener('mouseup', handleMouseUp);\
        \} else \{\
            window.removeEventListener('mousemove', handleMouseMove);\
            window.removeEventListener('mouseup', handleMouseUp);\
        \}\
        return () => \{\
            window.removeEventListener('mousemove', handleMouseMove);\
            window.removeEventListener('mouseup', handleMouseUp);\
        \};\
    \}, [isDragging, handleMouseMove, handleMouseUp]);\
\
    const isWindowOpen = activeView === 'finder' || (typeof activeView === 'object' && activeView.type === 'project');\
\
    if (!isWindowOpen) \{\
        return (\
            <div className="bg-gray-100 min-h-screen p-4 flex items-center justify-center font-sans">\
                <div className="fixed top-0 left-0 w-full h-full bg-gray-300 pointer-events-none z-0"></div>\
                <div className="text-gray-700 p-8 bg-white rounded-lg shadow-lg">\
                    <p>Window is closed. Please re-run the app to open the Finder view.</p>\
                </div>\
            </div>\
        );\
    \}\
\
    return (\
        <div className="bg-gray-100 min-h-screen p-4 flex items-center justify-center font-sans">\
            <div className="fixed top-0 left-0 w-full h-full bg-gray-300 pointer-events-none z-0"></div>\
            \
            <div \
                className=\{`absolute transition-all duration-300 ease-in-out $\{activeView === 'finder' ? 'w-[90%] max-w-5xl h-[70vh] min-h-[500px]' : 'w-full h-full top-0 left-0'\}`\}\
                style=\{activeView === 'finder' ? \{ top: position.y + 'px', left: position.x + 'px' \} : \{\}\}\
            >\
                <div \
                    className="w-full h-full"\
                    onMouseDown=\{activeView === 'finder' ? handleMouseDown : undefined\}\
                    style=\{\{ cursor: activeView === 'finder' ? 'grab' : 'default' \}\}\
                >\
                    \{activeView === 'finder' && \
                        <FinderWindow \
                            setActiveView=\{setActiveView\} \
                            activeNav=\{activeNav\}\
                            setActiveNav=\{setActiveNav\}\
                            activeProjectSubfolder=\{activeProjectSubfolder\}\
                            setActiveProjectSubfolder=\{setActiveProjectSubfolder\}\
                        />\
                    \}\
                    \{activeView.type === 'project' && <ProjectDetailPage project=\{activeView.data\} setActiveView=\{setActiveView\} />\}\
                </div>\
            </div>\
        </div>\
    );\
\};\
\
export default App;}