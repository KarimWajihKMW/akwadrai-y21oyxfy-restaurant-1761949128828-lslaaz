// Only showing the fixed section around line 88
// Replace the existing backgroundImage style declaration with this fix:

          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: selectedMovie ? `url(${selectedMovie.image})` : 'none',
            filter: 'brightness(0.4)'
          }}
        ></div>