'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Node {
    id: string;
    normal: string,
    active: string,
    label: string;
    x: number;
    y: number;
    connections: string[];
}

export default function SparkAnimation() {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    const nodes: Node[] = [
        {
            id: 'secret', normal: '/assets/Secret.png', active: '/assets/SecretMenu.png', label: 'SECRET MENU', x: -400, y: -100, connections: ['content'],
        },
        {
            id: 'content', normal: '/assets/Flag.png', active: '/assets/FlagActive.png', label: 'CONTENT', x: -250, y: 0, connections: ['secret', 'spark']
        },
        {
            id: 'spark', normal: '/assets/SparkIntelligence.png', active: '/assets/SparkIntelligence.png', label: 'SparkIntelligence', x: -100, y: 100, connections: ['content', 'media', 'innovation']
        },
        {
            id: 'suit', normal: '/assets/Suit.png', active: '/assets/SparkSuit.png', label: 'SparkSuit', x: -250, y: -100, connections: ['media']
        },
        {
            id: 'media', normal: '/assets/Layer.png', active: '/assets/LayerActive.png', label: "Media", x: -100, y: 0, connections: ['spakr', 'suit', 'deepsea']
        },
        {
            id: 'deepsea', normal: '/assets/Summertime Sadness.png', active: '/assets/DeepSea.png', label: 'DeepSea', x: -100, y: -200, connections: ['media']
        },
        {
            id: 'rew', normal: '/assets/Magnet.png', active: '/assets/SparkRew.png', label: 'SparkRew.png', x: 50, y: -200, connections: ['innovation']
        },
        {
            id: 'innovation', normal: '/assets/Cycle.png', active: 'assets/InnovationActive.png', label: 'InnovationActive', x: 50, y: 0, connections: ['spark', 'tech', 'rew']
        },
        {
            id: 'tech', normal: 'assets/Cloud.png', active: 'assets/SparkTech.png', label: 'SparkTech', x: 200, y: -100, connections: ['innovation']
        }

    ];

    return (
        <div className="relative w-full h-[600px] flex justify-center items-center">
            {/* SVG connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    <linearGradient id="sparkLine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0F67FF" />
                        <stop offset="100%" stopColor="#FF00A8" />
                    </linearGradient>
                </defs>

                {nodes.map((node) =>
                    node.connections.map((targetId) => {
                        const target = nodes.find((n) => n.id === targetId);
                        if (!target) return null;
                        return (
                            <motion.path
                                key={`${node.id}-${target.id}`}
                                d={`M ${400 + node.x} ${300 + node.y}
                                L ${400 + node.x} ${300 + target.y}
                                L ${400 + target.x} ${300 + target.y}`}
                                stroke="url(#sparkLine)"
                                strokeWidth="3"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{
                                    pathLength:
                                        activeNode === node.id || activeNode === target.id ? 1 : 0,
                                    opacity:
                                        activeNode === node.id || activeNode === target.id ? 1 : 0.1,
                                }}
                                transition={{ duration: 1 }}
                                strokeLinecap="round"
                            />

                        );
                    })
                )}
            </svg>

            {/* Nodes */}
            {nodes.map((node) => {
                const isActive =
                    activeNode === node.id || node.id === 'spark' || activeNode === null;
                return (
                    <motion.div
                        key={node.id}
                        className={`absolute flex justify-center items-center w-[140px] h-[70px] rounded-2xl text-center cursor-pointer border ${isActive
                            ? 'bg-white shadow-lg'
                            : 'bg-transparent border-gray-300 opacity-50'
                            }`}
                        style={{
                            top: `calc(50% + ${node.y}px)`,
                            left: `calc(50% + ${node.x}px)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: isActive ? `url(${node.active})` : `url(${node.normal})`
                        }}
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        transition={{ duration: 0.3 }}
                    >
                        {node.label}
                    </motion.div>
                );
            })}
        </div>
    );
}
