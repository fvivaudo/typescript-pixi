'use client';

import Head from 'next/head';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';
import {BunnyExample} from "@/app/pixiFiber/components/BunnyExample";
import {BunnyMarkExample} from "@/app/pixiFiber/components/BunnyMark";
import {CanvasPropsExample} from "@/app/pixiFiber/components/CanvasPropsExample";
import {ClickExample} from "@/app/pixiFiber/components/ClickExample";
import {PointsExample} from "@/app/pixiFiber/components/PointsExample";
import {SmokeTestExample} from "@/app/pixiFiber/components/SmokeTest";
import {ExampleList} from "@/app/pixiFiber/components/ExampleList";
import {DraggingExample} from "@/app/pixiFiber/components/DraggingExample";
import {CursorMovementExample} from "@/app/pixiFiber/components/CursorMovement";
import {MovementExample} from "@/app/pixiFiber/components/Movement";
import {TilingExample} from "@/app/pixiFiber/components/TilingSprite";

const examples = [
    // {
    //   name: 'Animated',
    //   slug: 'animated',
    //   component: AnimatedExample,
    // },

    {
        name: 'Bunny',
        slug: 'bunny',
        component: <BunnyExample/>,
    },
    {
        name: 'BunnyMark',
        slug: 'bunny-mark',
        component: <BunnyMarkExample/>,
    },
    {
        name: 'Canvas Props',
        slug: 'canvas-props',
        component: <CanvasPropsExample/>,
    },
    {
        name: 'Click',
        slug: 'click',
        component: <ClickExample/>,
    },
    {
        name: 'Dragging',
        slug: 'dragging',
        component: <DraggingExample/>,
    },
    {
        name: 'Cursor',
        slug: 'cursor',
        component: <CursorMovementExample/>,
    },
    {
        name: 'Movement',
        slug: 'movement',
        component: <MovementExample/>,
    },
    {
        name: 'Point-like props',
        slug: 'points',
        component: <PointsExample/>,
    },
    {
        name: 'Smoke Test',
        slug: 'smoke-test',
        component: <SmokeTestExample/>,
    },
    {
        name: 'Tiling',
        slug: 'tiling',
        component: <TilingExample/>,
    },
    // {
    //   name: 'Layers',
    //   slug: 'layers',
    //   component: LayersExample,
    // },
    // {
    //   name: 'Suspense',
    //   slug: 'suspense',
    //   component: SuspenseExample,
    // },
    // {
    //   name: 'unstable_batchedUpdates',
    //   slug: 'unstable_batchedUpdates',
    //   component: BatchedUpdatesExample,
    // },
];

import { useParams } from 'next/navigation'
import {useState} from "react";
import Button from "@/components/buttons/Button";
export default function PixiPage() {
    const params = useParams()
    const [selectedComponent, setSelectedComponent] = useState(examples[0].component)

    return (
        <main>
            <Head>
                <title>Hi</title>
            </Head>
            <section className='bg-white'>
                <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
                    <Logo className='w-16' />
                    <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
                    <p className='mt-2 text-sm text-gray-800'>
                        A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
                        Import, Seo, Link component, pre-configured with Husky{' '}
                    </p>

                    <div className="App-intro">
                        {/*<Routes>*/}
                        {/*  <Route path="" element={<ExampleList examples={examples} />} />*/}
                        {/*<Route path="bunny" element={<BunnyExample />} />*/}
                        {/*<Route path="" element={<ExampleList examples={examples} />} />*/}
                        {examples.map((example) => (
                            <Button key={example.slug} className='mt-6' onClick={() => setSelectedComponent(example.component)} variant='light'>
                                {example.slug}
                            </Button>
                            // <Route key={example.slug} path={`/pixiFiber/${example.slug}`} element={example.component} />
                        ))}
                        {/*{examples.map((example) => (*/}
                        {/*    <Route key={example.slug} path={`/${example.slug}`} element={example.component} />*/}
                        {/*))}*/}
                        {/*</Routes>*/}
                    </div>
                    {selectedComponent}

                </div>
            </section>
        </main>
    );
}
