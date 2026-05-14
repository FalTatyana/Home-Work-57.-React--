type Props = {
  children: React.ReactNode
}

const Users = ({ children }: Props) => {
  return (
    <div className="w-50">
      {children}
    </div>
  )
}

export default Users