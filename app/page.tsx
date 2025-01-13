'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Shield, Sword, Eye } from 'lucide-react'

export default function DuneLanding() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const sandwormY = useTransform(scrollYProgress, [0, 1], [1000, -100])
  const duneY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const textY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 50, 200])

  if (!mounted) return null

  return (
    <div 
      ref={containerRef}
      className="min-h-[300vh] bg-gradient-to-b from-orange-900 via-orange-800 to-orange-950 relative overflow-hidden"
    >
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-black/40 z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <motion.div 
          className="absolute bottom-0 w-full h-[70vh]"
          style={{ y: duneY }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900 to-transparent" />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,500 C200,400 400,300 500,500 C600,700 800,600 1000,500 L1000,1000 L0,1000 Z' fill='%23c2410c'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </motion.div>
        
        <motion.div 
          className="relative z-20 text-center space-y-6 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ y: textY }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            DUNE
          </h1>
          <p className="text-xl md:text-2xl text-orange-200">
            Fear is the mind-killer. Fear is the little-death that brings total obliteration.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              Begin Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-orange-600 text-orange-100 hover:bg-orange-600/20"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/80 animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen relative z-30 bg-gradient-to-b from-orange-900/0 via-orange-950 to-orange-950">
        <div className="container mx-auto px-4 py-32">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-orange-900/40 border-orange-800 backdrop-blur">
              <Shield className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-orange-100 mb-2">House Protection</h3>
              <p className="text-orange-300">Secure your legacy with the finest warriors and shields in the known universe.</p>
            </Card>
            <Card className="p-6 bg-orange-900/40 border-orange-800 backdrop-blur">
              <Sword className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-orange-100 mb-2">Combat Training</h3>
              <p className="text-orange-300">Master the art of war with our elite combat instructors and advanced weaponry.</p>
            </Card>
            <Card className="p-6 bg-orange-900/40 border-orange-800 backdrop-blur">
              <Eye className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-orange-100 mb-2">Spice Awareness</h3>
              <p className="text-orange-300">Enhance your consciousness and unlock the secrets of space and time.</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Sandworm Animation */}
      <motion.div 
        className="fixed left-0 w-full z-20 pointer-events-none"
        style={{ y: sandwormY }}
      >
        <div 
          className="w-full h-[300px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 C300,50 600,150 1200,100 L1200,300 L0,300 Z' fill='%23451a03'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* Call to Action */}
      <section className="min-h-screen relative z-30 bg-orange-950">
        <div className="container mx-auto px-4 py-32">
          <motion.div 
            className="max-w-2xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-orange-100">
              Join House Atreides
            </h2>
            <p className="text-xl text-orange-300">
              The spice must flow. Take your place among the great houses and shape the destiny of the known universe.
            </p>
            <Button 
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              Pledge Your Allegiance
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sand Particle Effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {mounted && <SandParticles />}
      </div>
    </div>
  )
}

function SandParticles() {
  const particlesRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const particles: HTMLDivElement[] = []
    const container = particlesRef.current
    
    if (!container) return
    
    function createParticle() {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-orange-300/20 rounded-full'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = '-10px'
      particle.style.transform = `scale(${Math.random()})`
      container!.appendChild(particle)
      
      const speed = 2 + Math.random() * 2
      const rotation = -15 + Math.random() * 30
      let position = -10
      
      function animate() {
        position += speed
        particle.style.top = `${position}px`
        particle.style.transform = `translate(${rotation}px, 0) scale(${Math.random()})`
        
        if (position < window.innerHeight) {
          requestAnimationFrame(animate)
        } else {
          particle.remove()
          particles.splice(particles.indexOf(particle), 1)
        }
      }
      
      particles.push(particle)
      requestAnimationFrame(animate)
    }
    
    const interval = setInterval(createParticle, 100)
    
    return () => {
      clearInterval(interval)
      particles.forEach(particle => particle.remove())
    }
  }, [])
  
  return <div ref={particlesRef} className="absolute inset-0" />
}

