// import "./FooterSection.css"; // move your <style> CSS into this file

export const FooterSection = () => {
  return (
    <footer className="bg-animated cyber-grid relative overflow-hidden bg-slate-900">
      <div className="mx-12 px-4 py-12">

        {/* Bottom copyright */}
        <div className="mt-8 pt-8 border-b border-purple-800">
          <p className="text-center text-purple-300 pb-12">
            &copy; 2025 Nayem Ahmed. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none neon-border"></div>
    </footer>
  );
};
