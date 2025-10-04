import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { BookOpen, Users, Coins, Shield, Headphones, MessageCircle, BarChart3, Sparkles, ArrowRight, Twitter, Github, Mail, Heart, ExternalLink } from 'lucide-react'
import Hero from '@/components/hero-futuristic'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:bg-black">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-black/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900 dark:text-white">Legato</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/explore" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
              Browse Books
            </Link>
            <Link href="#pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#community" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
              Community
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-900/50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full -translate-y-48 translate-x-48 blur-3xl opacity-30" />

        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
              <BookOpen className="w-4 h-4 mr-2" />
              Core Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Everything You Need for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Reading & Writing
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover a platform built for book lovers, with features that enhance every aspect of your reading and writing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Immersive Reading Experience
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Personalize fonts, themes, brightness, and layouts. Save bookmarks, highlight passages, and track your reading progress across all devices.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Vibrant Community
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Engage in threaded discussions, leave comments on chapters, and connect directly with authors and fellow readers in meaningful conversations.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-yellow-300 dark:hover:border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Coins className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Fair Writer Support
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Support your favorite writers with our transparent coin system. Writers keep 70% of earnings with instant payouts and detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 bg-[size:32px_32px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full translate-y-48 -translate-x-48 blur-3xl opacity-40" />

        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6 border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-4 h-4 mr-2" />
              Advanced Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Innovative Features That{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Set Us Apart
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of digital reading with AI-powered features, enhanced privacy, and comprehensive tools for writers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-500" />
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  AI Audiobooks
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Transform any chapter into high-quality audio narration using advanced AI voice synthesis powered by ElevenLabs.
                </p>
                <div className="mt-4 flex items-center text-xs text-purple-600 dark:text-purple-400 font-medium">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Powered by ElevenLabs
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-500" />
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Secret Vault
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Keep your private reading collection secure with password-protected access and enhanced privacy controls.
                </p>
                <div className="mt-4 flex items-center text-xs text-red-600 dark:text-red-400 font-medium">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  End-to-end encrypted
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-500" />
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/50 dark:to-indigo-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Rich Discussions
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Participate in threaded chapter discussions, reply to comments, and engage directly with authors and readers.
                </p>
                <div className="mt-4 flex items-center text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Real-time updates
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-500" />
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Writer Analytics
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Comprehensive dashboard showing reader engagement, earnings, chapter performance, and audience insights.
                </p>
                <div className="mt-4 flex items-center text-xs text-orange-600 dark:text-orange-400 font-medium">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Advanced metrics
                </div>
              </div>
            </div>
          </div>

          {/* Feature highlight banner */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience These Features?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of readers and writers who are already enjoying these innovative features on Legato.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                    Start Reading Free
                  </Button>
                </Link>
                <Link href="/register?type=writer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Become a Writer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Start reading for free, support writers with our fair coin system, and publish your own stories at no cost.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border rounded-xl p-8 bg-slate-50 dark:bg-slate-700 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Free Reader</h3>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">$0</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Forever free</p>
              <ul className="text-left space-y-3 text-slate-600 dark:text-slate-300 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Access to all free books</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Customizable reading interface</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Community discussions</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Reading progress tracking</li>
              </ul>
              <Button variant="outline" className="w-full">Get Started Free</Button>
            </div>
            <div className="border-2 border-blue-600 rounded-xl p-8 bg-blue-50 dark:bg-blue-900/20 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Premium Reader</h3>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Pay per book</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Using coins</p>
              <ul className="text-left space-y-3 text-slate-600 dark:text-slate-300 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All free features</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Access to premium books</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> AI audiobook generation</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Secret vault access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
              </ul>
              <Button className="w-full">Start Reading Premium</Button>
            </div>
            <div className="border rounded-xl p-8 bg-slate-50 dark:bg-slate-700 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Writer</h3>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Free</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Keep 70% of earnings</p>
              <ul className="text-left space-y-3 text-slate-600 dark:text-slate-300 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All reader features</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Publish unlimited books</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Monetization tools</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Analytics dashboard</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Character management</li>
              </ul>
              <Button variant="outline" className="text-black w-full">Become a Writer</Button>
            </div>
          </div>
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 rounded-xl max-w-3xl mx-auto border dark:border-slate-700">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How Our Coin System Works</h4>
            <p className="text-slate-600 dark:text-slate-300">
              Purchase coins to support writers and access premium content. Writers earn coins when readers purchase their books or chapters.
              It's a fair, transparent system that directly supports the creative community.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-900/10 dark:to-blue-900/10" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-100 dark:bg-green-900/20 rounded-full -translate-y-48 -translate-x-48 blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full translate-y-48 translate-x-48 blur-3xl opacity-30" />

        <div className="container mx-auto text-center relative">
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6 border border-green-200 dark:border-green-800">
              <Users className="w-4 h-4 mr-2" />
              Community
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Join Our Thriving{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Literary Community
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Connect with passionate readers and talented writers in a supportive environment where stories flourish and creativity thrives.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-105 transition-transform duration-300">5K+</div>
                <div className="text-lg text-slate-900 dark:text-white font-semibold mb-1">Active Readers</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Discovering new stories daily</div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-105 transition-transform duration-300">500+</div>
                <div className="text-lg text-slate-900 dark:text-white font-semibold mb-1">Published Writers</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Sharing their creative works</div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-105 transition-transform duration-300">2K+</div>
                <div className="text-lg text-slate-900 dark:text-white font-semibold mb-1">Books & Stories</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Across all genres</div>
              </div>
            </div>
          </div>

          {/* Features for readers and writers */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">For Readers</h3>
              </div>
              <ul className="space-y-4 text-left">
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <MessageCircle className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Engage in meaningful discussions about your favorite chapters and characters</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Discover new authors and genres through community recommendations</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Connect directly with authors and fellow book enthusiasts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">For Writers</h3>
              </div>
              <ul className="space-y-4 text-left">
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <BarChart3 className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Build your audience with detailed analytics and reader insights</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Coins className="h-4 w-4 text-yellow-600" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Monetize your work fairly with transparent revenue sharing</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <MessageCircle className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Receive direct feedback and build relationships with your readers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-black dark:via-slate-900 dark:to-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] opacity-30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full -translate-y-48 -translate-x-48 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full translate-y-48 translate-x-48 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 blur-2xl" />

        <div className="container mx-auto text-center relative">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Join the Literary Revolution
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to Dive Into Your{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Next Great Story?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our community of passionate readers and writers. Start reading for free, or share your own stories with the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/register">
                <Button size="lg" className="text-lg px-10 py-4 bg-white text-slate-900 hover:bg-blue-50 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 font-semibold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Reading Free
                </Button>
              </Link>
              <Link href="/register?type=writer">
                <Button size="lg" className="text-lg px-10 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 font-semibold">
                  <Users className="w-5 h-5 mr-2" />
                  Become a Writer
                </Button>
              </Link>
            </div>

            {/* Social proof and features */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center text-blue-200">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white/20" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white/20" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white/20" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold">
                    +
                  </div>
                </div>
                <span className="text-sm font-medium">5,000+ Active Users</span>
              </div>

              <div className="flex items-center justify-center text-blue-200">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-sm font-medium">No Credit Card Required</span>
              </div>

              <div className="flex items-center justify-center text-blue-200">
                <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-sm font-medium">Free Forever Plan</span>
              </div>
            </div>

            <p className="text-blue-300/80 text-sm">
              Start your literary journey today • No commitments, just great stories
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-black dark:from-black dark:via-slate-950 dark:to-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-48 -translate-x-48 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-y-48 translate-x-48 blur-3xl" />

        <div className="relative border-t border-slate-800/50 dark:border-slate-700/50">
          <div className="container mx-auto px-4 py-16">
            {/* Main footer content */}
            <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-8 mb-12">
              {/* Brand section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Legato
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                  The social reading and writing platform where stories come to life. Join our community of passionate readers and talented writers.
                </p>

                {/* Social links */}
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Twitter className="h-4 w-4 text-slate-400 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Github className="h-4 w-4 text-slate-400 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Mail className="h-4 w-4 text-slate-400 group-hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Platform links */}
              <div>
                <h3 className="text-white font-semibold mb-6 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Platform
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/explore" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                      <span>Browse Books</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                      <span>Become a Writer</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="text-slate-400 hover:text-white transition-colors duration-200">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                      <span>Dashboard</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Features links */}
              <div>
                <h3 className="text-white font-semibold mb-6 flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Features
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#features" className="text-slate-400 hover:text-white transition-colors duration-200">
                      AI Audiobooks
                    </Link>
                  </li>
                  <li>
                    <Link href="/vault" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                      <span>Secret Vault</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#community" className="text-slate-400 hover:text-white transition-colors duration-200">
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link href="/analytics" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                      <span>Analytics</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support links */}
              <div>
                <h3 className="text-white font-semibold mb-6 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Support
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                      <span>Help Center</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                      <span>Contact Us</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-200">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-700/50">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
                <p className="text-slate-400 mb-6">
                  Get the latest updates on new features, book releases, and community highlights.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 font-medium">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="border-t border-slate-800/50 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center text-slate-400 text-sm">
                  <span>&copy; 2024 Legato. All rights reserved.</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for book lovers
                  </span>
                </div>

                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center text-slate-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span>All systems operational</span>
                  </div>
                  <Link href="/status" className="text-slate-400 hover:text-white transition-colors">
                    Status Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}