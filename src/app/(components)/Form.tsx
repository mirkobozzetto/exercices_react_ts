import { useState } from "react";

interface FormProps {
  onSubmit: (width: number, height: number, color: string) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(width, height, color);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="width" className="block">
          Largeur:
        </label>
        <input
          type="number"
          id="width"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <label htmlFor="height" className="block">
          Hauteur:
        </label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <label htmlFor="color" className="block">
          Couleur:
        </label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full max-w-xs"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Dessiner
      </button>
    </form>
  );
};
