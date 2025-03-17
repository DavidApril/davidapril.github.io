'use client'

import { useEffect, useState } from 'react'

function ScrollUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 18.75 7.5-7.5 7.5 7.5"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 12.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  )
}

export function ScrollUpButton() {
  useEffect(() => {}, [])

  function onClick(): void {
    window.scroll(0, 0)
  }

  return (
    <button
      type="button"
      className="group fixed right-4 bottom-4 z-50 -m-2.5 cursor-pointer p-2.5"
      onClick={onClick}
    >
      <span className="sr-only">Scroll up</span>
      <ScrollUpIcon className="h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900 lg:dark:fill-white" />
    </button>
  )
}
