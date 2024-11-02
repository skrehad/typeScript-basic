type rehad ={
    bike :string;
    car: string;
    ship:string
}

type CheckVehicle<T>= T extends keyof rehad ?true:false
type HasTractor = CheckVehicle<"kisona">