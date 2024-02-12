interface CanvasProps {
  width: number;
  height: number;
  color: string;
}

export const Canvas = ({ width, height, color }: CanvasProps) => {
  return (
    <div
      className="canvas" // Add a class name for styling
    ></div>
  );
};
