import React from 'react';

const SectionHeader = ({ sub, title, center = true, dark = false }) => (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
        <span className={`text-sm font-black uppercase tracking-[0.2em] ${dark ? 'text-[#75CBB3]' : 'text-[#013A57]'} mb-3 block`}>{sub}</span>
        <h2 className={`text-3xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-slate-900'} leading-tight`}>{title}</h2>
        <div className={`h-1.5 w-20 bg-[#75CBB3] mt-6 ${center ? 'mx-auto' : ''}`}></div>
    </div>
);

export default SectionHeader;
