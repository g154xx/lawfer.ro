
import { Link } from "react-router-dom";

interface AuthToggleProps {
  isSignUp: boolean;
  onToggle: () => void;
}

const AuthToggle = ({ isSignUp, onToggle }: AuthToggleProps) => {
  return (
    <div className="mt-6 text-center space-y-4">
      <button
        type="button"
        onClick={onToggle}
        className="text-sm text-primary hover:underline"
      >
        {isSignUp 
          ? "Aveți deja un cont? Conectați-vă" 
          : "Nu aveți un cont? Înregistrați-vă"
        }
      </button>
      
      {!isSignUp && (
        <div className="text-sm text-muted-foreground">
          <Link to="/forgot-password" className="text-primary hover:underline">
            Ați uitat parola?
          </Link>
        </div>
      )}
      
      <div className="text-sm text-muted-foreground">
        <Link to="/pricing" className="text-primary hover:underline">
          Vezi planurile premium
        </Link>
      </div>
    </div>
  );
};

export default AuthToggle;
