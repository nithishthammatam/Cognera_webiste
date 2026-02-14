/**
 * HowItWorks Component
 * 
 * Displays the 4-step process of how Cognera works.
 * Features:
 * - 4-step workflow visualization with numbered badges
 * - Each step has unique color scheme and icon
 * - Interactive hover effects with gradient overlays
 * - Responsive 2-column grid layout
 * - Decorative corner accents for visual interest
 */
/**
 * HowItWorks Component
 * 
 * Displays the 4-step process of how Cognera works in a flow-like structure.
 * Features:
 * - Wavy connector line using SVG
 * - Responsive layout (horizontal wave on desktop, vertical stack on mobile)
 * - Step nodes with icons and alternating text positions
 */
export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Sign Up',
      description: 'Create an account and generate your unique Bhaskar ID.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    {
      number: '2',
      title: 'Integrate SDK',
      description: 'Add the lightweight SDK to your mobile application with a few lines of code.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200'
    },
    {
      number: '3',
      title: 'Capture Signals',
      description: 'Automatically track app switches, focus windows, and flow patterns.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      ),
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200'
    },
    {
      number: '4',
      title: 'Insights Dashboard',
      description: 'Access actionable insights to optimize user experience.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200'
    }
  ]

  return (
    <section className="how-it-works max-w-7xl mx-auto mb-16 px-4 sm:px-6 relative z-10 py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center mb-16 font-bold">
        How Cognera Works
      </h2>

      {/* Desktop view: Wavy Flow */}
      <div className="hidden md:block relative h-[320px] w-full max-w-6xl mx-auto">
        {/* SVG Curve Line */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 320"
          fill="none"
          preserveAspectRatio="none"
          style={{ overflow: 'visible' }}
        >
          {/* 
            Wave Path Reduced Height:
            Center Y ~ 160
            Top Peaks ~ 100
            Bottom Peaks ~ 220
            Amplitude reduced significantly.
          */}
          <path
            d="M 50 160 
               C 150 160, 150 240, 275 240 
               C 400 240, 400 80, 525 80 
               C 650 80, 650 240, 775 240 
               C 900 240, 900 80, 1025 80
               C 1100 80, 1100 160, 1150 160"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="opacity-40"
          />
        </svg>

        {/* Start Dot */}
        <div className="absolute left-[4%] top-1/2 transform -translate-y-1/2 flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-green-500 shadow-md ring-4 ring-green-100 mb-2"></div>
          <span className="text-sm font-bold text-gray-700 whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm">Start</span>
        </div>

        {/* End Dot */}
        <div className="absolute right-[2%] top-1/2 transform -translate-y-1/2 flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-green-500 shadow-md ring-4 ring-green-100 mt-2"></div>
          <span className="text-sm font-bold text-gray-700 whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm mt-1">Done</span>
        </div>


        {/* Steps */}
        <div className="relative w-full h-full text-center">
          {steps.map((step, index) => {
            // Alternating Positioning: Bottom -> Top -> Bottom -> Top
            // Adjusted for Flatter Wave
            // Step 1: ~23% X, Bottom (75% Y)
            // Step 2: ~44% X, Top (25% Y)
            // Step 3: ~65% X, Bottom (75% Y)
            // Step 4: ~85% X, Top (25% Y)

            let positionStyle = {}
            let isTop = false

            if (index === 0) { // Step 1: Bottom
              positionStyle = { left: '23%', top: '75%', transform: 'translate(-50%, -50%)' }
              isTop = false
            } else if (index === 1) { // Step 2: Top
              positionStyle = { left: '44%', top: '25%', transform: 'translate(-50%, -50%)' }
              isTop = true
            } else if (index === 2) { // Step 3: Bottom
              positionStyle = { left: '65%', top: '75%', transform: 'translate(-50%, -50%)' }
              isTop = false
            } else if (index === 3) { // Step 4: Top
              positionStyle = { left: '85%', top: '25%', transform: 'translate(-50%, -50%)' }
              isTop = true
            }

            const verticalLineHeight = "h-12" // Reduced height

            return (
              <div key={index} className="absolute flex flex-col items-center w-64 group" style={positionStyle}>

                {/* TOP: Text & Line */}
                {isTop && (
                  <>
                    <div className="mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      <p className="text-xs text-gray-500 leading-snug mx-auto max-w-[180px]">{step.description}</p>
                    </div>
                    {/* Vertical Connector Line */}
                    <div className={`relative w-0.5 bg-orange-300 ${verticalLineHeight} mb-[-2px]`}>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-orange-400"></div>
                    </div>
                  </>
                )}


                {/* Icon Node */}
                <div className={`relative z-10 w-20 h-20 rounded-full bg-white border-[5px] ${step.border} flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}>
                  {/* Inner colored circle */}
                  <div className={`w-16 h-16 rounded-full bg-white border-2 ${step.border.replace('border-', 'border-opacity-50 ')} flex items-center justify-center p-3`}>
                    {/* Icon */}
                    <div className={`${step.color}`}>
                      {step.icon}
                    </div>
                  </div>
                </div>


                {/* BOTTOM: Line & Text */}
                {!isTop && (
                  <>
                    {/* Vertical Connector Line */}
                    <div className={`relative w-0.5 bg-orange-300 ${verticalLineHeight} mt-[-2px]`}>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-orange-400"></div>
                    </div>
                    <div className="mt-2 transition-transform duration-300 group-hover:translate-y-1">
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      <p className="text-xs text-gray-500 leading-snug mx-auto max-w-[180px]">{step.description}</p>
                    </div>
                  </>
                )}

              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile/Tablet View: Vertical Stack */}
      <div className="md:hidden space-y-8 relative">
        {/* Vertical decorative line */}
        <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-200 border-l-2 border-dashed border-gray-300"></div>

        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start">
            <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 ${step.border} flex items-center justify-center shadow-md ml-4`}>
              <div className={`w-10 h-10 rounded-full ${step.bg} flex items-center justify-center`}>
                <div className={step.color}>{step.icon}</div>
              </div>
              <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center border-2 border-white`}>
                {step.number}
              </div>
            </div>
            <div className="ml-6 pt-2 pr-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

