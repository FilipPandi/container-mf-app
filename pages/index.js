import MicroFrontend from "@/pages/Microfrontends";

export default function Home() {

const host = "http://localhost:3001"

  return (
   <div>
       <MicroFrontend host={host} name="Child1" />
   </div>
  )
}
