interface ICreateSpecificationDTO {
  name: string
  description: string
}

export interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTO): void
}
