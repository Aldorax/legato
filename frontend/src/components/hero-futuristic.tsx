import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[size:20px_20px] opacity-30" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-1000" />

      <div className="relative container mx-auto text-center"></div>
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 border border-blue-200 dark:border-blue-800">
          <Sparkles className="w-4 h-4 mr-2" /> Where Stories Come to Life
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          The Social Reading &{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Writing Platform
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-medium">
          Join thousands of readers and writers in a community where every story matters
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience immersive reading with AI audiobooks, engage in meaningful discussions, and support writers through our fair monetization system. Whether you're here to discover your next favorite book or share your own stories, Legato is where literary communities thrive.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/register">
            <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Reading Free
            </Button>
          </Link>
          <Link href="/register?type=writer">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-200">
              <Users className="w-5 h-5 mr-2" />
              Become a Writer
            </Button>
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white dark:border-slate-800" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white dark:border-slate-800" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white dark:border-slate-800" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 border-2 border-white dark:border-slate-800 flex items-center justify-center text-white text-xs font-bold">
                +
              </div>
            </div>
            <span>Join 5,000+ readers and writers</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-600" />
          <span>✨ No credit card required</span>
        </div>
      </div>
    </section >
  )
}