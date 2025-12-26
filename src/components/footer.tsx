const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Zephora Digital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
