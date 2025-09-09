import { Button } from '@/components/ui/button';
const DownloadSection = () => {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Download The<br />Lawexa App
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Get legal cases and statutes, offline access, AI Tutor and many more at your fingertips
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-dark flex items-center space-x-3 px-6 py-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">📱</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-xs text-gray-300 ">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button className="btn-dark flex items-center space-x-3 px-6 py-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">▶️</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-large hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
                  
                  {/* Screen Content */}
                  <div className="pt-8 px-4 h-full bg-gradient-to-b from-primary/10 to-white">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">Welcome to Lawexa</h3>
                      <p className="text-sm text-muted-foreground">Legal Intelligence at your fingertips</p>
                    </div>
                    
                    {/* Feature Cards */}
                    <div className="space-y-4">
                      <div className="bg-primary text-primary-foreground p-4 rounded-xl">
                        <div className="text-sm font-semibold">🤖 AI Legal Tutor</div>
                        <div className="text-xs opacity-90 mt-1">Ask any legal question</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl shadow-soft">
                        <div className="text-sm font-semibold text-foreground">📚 Case Library</div>
                        <div className="text-xs text-muted-foreground mt-1">20,000+ cases available</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl shadow-soft">
                        <div className="text-sm font-semibold text-foreground">📸 Note Scanner</div>
                        <div className="text-xs text-muted-foreground mt-1">Convert handwritten notes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DownloadSection;