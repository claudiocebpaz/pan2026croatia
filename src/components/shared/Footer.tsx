import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white text-center p-4 mt-auto">
      <p>&copy; 2025 Project Sanctuary. All rights reserved.</p>
      <p>
        <Link to="/terms" className="font-semibold text-gray-50">
          Terms & Conditions
        </Link>
      </p>
    </footer>
  );
}
