/* This example requires Tailwind CSS v2.0+ */
import MainAction from "./components/MainAction"
import Header from "./components/Header"
import KYCForm from "./components/KYCForm"

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
]
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Shell() {
  return (
    <div className="min-h-screen bg-black text-primary">
      <Header />

      <main className="bg-opacity-90">
        <div className="mx-auto text-white sm:px-6 lg:px-8">
          <MainAction />
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laboriosam quae hic incidunt! Aperiam veritatis inventore placeat
            sequi, dolorem harum. Maxime molestiae, velit tempore tenetur
            ratione voluptatum provident est eum. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aspernatur, iure totam. Magni hic
            aliquid sed temporibus voluptates culpa accusantium expedita
            quibusdam veritatis. Provident dignissimos voluptatem minus fuga
            ipsa, magni pariatur. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Doloribus natus maxime excepturi. Non, quisquam!
            Ullam, expedita vitae omnis temporibus et modi quos tempore adipisci
            ea iste enim dolor esse iure? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Vitae quo beatae dolorem.
            Reprehenderit porro dolorem excepturi perferendis accusantium maxime
            magni voluptatibus cupiditate adipisci architecto ipsa vero quos,
            sit optio perspiciatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam laboriosam quae hic incidunt! Aperiam
            veritatis inventore placeat sequi, dolorem harum. Maxime molestiae,
            velit tempore tenetur ratione voluptatum provident est eum. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, iure
            totam. Magni hic aliquid sed temporibus voluptates culpa accusantium
            expedita quibusdam veritatis. Provident dignissimos voluptatem minus
            fuga ipsa, magni pariatur. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Doloribus natus maxime excepturi. Non, quisquam!
            Ullam, expedita vitae omnis temporibus et modi quos tempore adipisci
            ea iste enim dolor esse iure? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Vitae quo beatae dolorem.
            Reprehenderit porro dolorem excepturi perferendis accusantium maxime
            magni voluptatibus cupiditate adipisci architecto ipsa vero quos,
            sit optio perspiciatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam laboriosam quae hic incidunt! Aperiam
            veritatis inventore placeat sequi, dolorem harum. Maxime molestiae,
            velit tempore tenetur ratione voluptatum provident est eum. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, iure
            totam. Magni hic aliquid sed temporibus voluptates culpa accusantium
            expedita quibusdam veritatis. Provident dignissimos voluptatem minus
            fuga ipsa, magni pariatur. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Doloribus natus maxime excepturi. Non, quisquam!
            Ullam, expedita vitae omnis temporibus et modi quos tempore adipisci
            ea iste enim dolor esse iure? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Vitae quo beatae dolorem.
            Reprehenderit porro dolorem excepturi perferendis accusantium maxime
            magni voluptatibus cupiditate adipisci architecto ipsa vero quos,
            sit optio perspiciatis.
          </section>
          <div className="max-w-2xl p-6 mx-auto mt-6 border rounded-md border-primary">
            <KYCForm />
          </div>
        </div>
      </main>
    </div>
  )
}
