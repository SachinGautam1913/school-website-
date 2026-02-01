const stats = [
  { value: "2500+", label: "Students" },
  { value: "150+", label: "Expert Teachers" },
  { value: "25+", label: "Years of Excellence" },
  { value: "98%", label: "Success Rate" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
