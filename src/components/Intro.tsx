'use client'

import { IconLink, FloatingDock, Button } from '@/components'
import {
  AcademicIcon,
  BriefcaseIcon,
  CommandlineIcon,
  LanguageIcon,
  LinkedinIcon,
} from './icons'
import Link from 'next/link'

function HackTheBoxIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
      <path
        fill-rule="evenodd"
        d="M9.638 1.093a.75.75 0 0 1 .724 0l2 1.104a.75.75 0 1 1-.724 1.313L10 2.607l-1.638.903a.75.75 0 1 1-.724-1.313l2-1.104ZM5.403 4.287a.75.75 0 0 1-.295 1.019l-.805.444.805.444a.75.75 0 0 1-.724 1.314L3.5 7.02v.73a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .388-.657l1.996-1.1a.75.75 0 0 1 1.019.294Zm9.194 0a.75.75 0 0 1 1.02-.295l1.995 1.101A.75.75 0 0 1 18 5.75v2a.75.75 0 0 1-1.5 0v-.73l-.884.488a.75.75 0 1 1-.724-1.314l.806-.444-.806-.444a.75.75 0 0 1-.295-1.02ZM7.343 8.284a.75.75 0 0 1 1.02-.294L10 8.893l1.638-.903a.75.75 0 1 1 .724 1.313l-1.612.89v1.557a.75.75 0 0 1-1.5 0v-1.557l-1.612-.89a.75.75 0 0 1-.295-1.019ZM2.75 11.5a.75.75 0 0 1 .75.75v1.557l1.608.887a.75.75 0 0 1-.724 1.314l-1.996-1.101A.75.75 0 0 1 2 14.25v-2a.75.75 0 0 1 .75-.75Zm14.5 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.388.657l-1.996 1.1a.75.75 0 1 1-.724-1.313l1.608-.887V12.25a.75.75 0 0 1 .75-.75Zm-7.25 4a.75.75 0 0 1 .75.75v.73l.888-.49a.75.75 0 0 1 .724 1.313l-2 1.104a.75.75 0 0 1-.724 0l-2-1.104a.75.75 0 1 1 .724-1.313l.888.49v-.73a.75.75 0 0 1 .75-.75Z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

function BookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

export function Intro() {
  return (
    <>
      <FloatingDock
        items={[
          {
            title: 'Experiencia',
            icon: <BriefcaseIcon />,
            href: '#experiencia_laboral',
          },
          { title: 'Educación', icon: <AcademicIcon />, href: '#educaci-n' },
          { title: 'Cursos', icon: <BookIcon />, href: '#cursos' },
          { title: 'Lenguajes', icon: <LanguageIcon />, href: '#lenguajes' },
          {
            title: 'Habilidades técnicas',
            icon: <CommandlineIcon />,
            href: '#habilidades_t-cnicas',
          },
        ]}
      />
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        <span>Jesús D. Agámez</span>
        <br />
        <span className="text-sky-300">Ingeniero de Software</span>
      </h1>

      <p className="mt-4 text-sm/6 text-gray-300">
        Estudiante de Ingeniería de Software con 2 años de experiencia en el
        desarrollo especializado en tecnologías como JavaScript, TypeScript, y
        frameworks modernos como NestJS, ReactJS y NextJS. Poseo conocimientos
        en control de versiones con Git, diseño de bases de datos y servicios
        web, complementados con habilidades básicas en diseño web (HTML/CSS).
        Experiencia con el ciclo completo del desarrollo de software, desarrollo
        de pipelines (CI/CD) para automatización y Docker + Kubernetes para
        contenerización.
      </p>
      <div className="mt-3">
        <a
          download={'jesus-agamez-desarrollador-curriculum'}
          href="/03_16_2025.pdf"
        >
          <Button>Descargar CV</Button>
        </a>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href="https://linkedin.com/in/david-agamez"
          icon={LinkedinIcon}
          target="_blank"
          className="flex-none"
        >
          Linkedin
        </IconLink>
        <IconLink
          href="https://github.com/DavidApril"
          icon={GitHubIcon}
          target="_blank"
          className="flex-none"
        >
          GitHub
        </IconLink>
        <IconLink
          href="https://app.hackthebox.com/profile/1580898"
          icon={HackTheBoxIcon}
          target="_blank"
          className="flex-none"
        >
          HackTheBox
        </IconLink>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      {/* Brought to you by{' '} */}
      {/* <IconLink href="#" icon={XIcon} compact> */}
      {/* x */}
      {/* </IconLink> */}
    </p>
  )
}
