import { ArrowNarrowDownIcon } from "@heroicons/react/solid";
import { Button } from "@tremor/react";
export default function ActualizarPaginaButton() {
  const handleActualizarClick = () => {
    window.location.reload();
  };

  return (
    <Button
      icon={ArrowNarrowDownIcon}
      className="ml-4 "
      onClick={handleActualizarClick}
    >
      Actualizar
    </Button>
  );
}
