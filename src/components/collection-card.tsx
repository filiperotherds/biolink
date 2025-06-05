import { Badge } from "./ui/badge";

interface CollectionCardProps {
  street: string;
  number: string;
  city: string;
  state: string;
  createdAt: string;
  createdByName: string;
  status: string;
}

export default function CollectionCard(props: CollectionCardProps) {
  const date = new Date(props.createdAt);

  const formattedDate = date.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  let statusFormatted;

  switch (props.status) {
    case "PENDING_APPROVAL":
      statusFormatted = "Aguardando Aprovação";
      break;
    case "APPROVED":
      statusFormatted = "Aprovado";
      break;
    case "IN_PROGRESS":
      statusFormatted = "Em Progresso";
      break;
    case "COMPLETED":
      statusFormatted = "Concluído";
      break;
    case "CLOSED":
      statusFormatted = "Fechado";
      break;
    default:
      statusFormatted = "Status Desconhecido";
      break;
  }

  return (
    <div className="relative w-full h-auto py-2 px-3 flex flex-row items-center justify-between border border-border rounded-2xl shadow-xs">
      <Badge
        variant="outline"
        className="absolute top-2 right-2 text-muted-foreground"
      >
        {statusFormatted}
      </Badge>

      <div className="h-full gap-3 flex flex-col items-start justify-between">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-xs font-semibold">
            {props.street}, {props.number}
          </h1>
          <span className="text-xs text-muted-foreground">
            {props.city} - {props.state}
          </span>
        </div>

        <div className="flex flex-col items-start justify-end">
          <h1 className="text-xs text-muted-foreground">Criado em</h1>
          <span className="text-xs text-semibold">{formattedDate}</span>
        </div>
      </div>

      <div className="h-full flex flex-col items-end justify-end">
        <h1 className="text-xs text-muted-foreground">Criado por</h1>
        <span className="text-xs font-semibold text-end">
          {props.createdByName}
        </span>
      </div>
    </div>
  );
}
