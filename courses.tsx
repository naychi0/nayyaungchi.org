import { Button } from "@/components/ui/button"

export default function Courses() {
  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript to build modern, responsive websites from scratch.",
      duration: "8 weeks",
      level: "Beginner",
    },
    {
      title: "Advanced Programming",
      description: "Master advanced programming concepts and techniques for building complex applications.",
      duration: "12 weeks",
      level: "Intermediate",
    },
    {
      title: "Data Science Essentials",
      description: "Explore data analysis, visualization, and machine learning fundamentals.",
      duration: "10 weeks",
      level: "Intermediate",
    },
    {
      title: "Mobile App Development",
      description: "Create native mobile applications for iOS and Android platforms.",
      duration: "10 weeks",
      level: "Intermediate",
    },
    {
      title: "Graphic Design Masterclass",
      description: "Develop professional design skills using industry-standard tools and techniques.",
      duration: "8 weeks",
      level: "All Levels",
    },
    {
      title: "Digital Marketing",
      description: "Learn effective strategies for online marketing, SEO, and social media campaigns.",
      duration: "6 weeks",
      level: "Beginner",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Courses</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
        Explore our wide range of courses designed to help you develop new skills and advance your career.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="bg-primary/10 p-4">
              <h3 className="text-xl font-semibold text-primary">{course.title}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">{course.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-6">
                <span>Duration: {course.duration}</span>
                <span>Level: {course.level}</span>
              </div>
              <Button className="w-full">Learn More</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Not sure which course is right for you?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our education advisors are here to help you choose the perfect course based on your goals and experience
          level.
        </p>
        <Button variant="outline" className="mr-4">
          Schedule a Consultation
        </Button>
        <Button>View Course Catalog</Button>
      </div>
    </div>
  )
}

