import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Nay Yaung Chi Training Center</h1>

      <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
        <div className="md:w-1/2">
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1734740487055.jpg-caBmLzoHcgP5nQ6XhlWrjDNLUpKGyd.jpeg"
              alt="Nay Yaung Chi Training Center"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Nay Yaung Chi Training Center, we are dedicated to providing high-quality education and training services
            to help our students achieve their full potential and build successful careers.
          </p>
          <p className="text-gray-700 mb-6">
            Our experienced instructors and modern facilities create an ideal learning environment for students of all
            backgrounds and skill levels.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-primary">Our History</h3>
          <p className="text-gray-700">
            Founded in 2015, Nay Yaung Chi Training Center has grown from a small local training facility to a respected
            institution with a track record of student success.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-primary">Our Approach</h3>
          <p className="text-gray-700">
            We believe in hands-on, practical learning experiences combined with theoretical knowledge to ensure our
            students are well-prepared for real-world challenges.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-primary">Our Values</h3>
          <p className="text-gray-700">
            Excellence, integrity, innovation, and student success are the core values that guide everything we do at
            Nay Yaung Chi Training Center.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Join Our Community</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Whether you're looking to start a new career, enhance your skills, or explore new interests, Nay Yaung Chi
          Training Center has a program for you.
        </p>
        <Button size="lg">
          <Link href="/courses">Explore Our Courses</Link>
        </Button>
      </div>
    </div>
  )
}

