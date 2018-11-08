import { User } from './User.model'

export interface FilterReciversResponse {
    responseCode?,
    message?,
    data: {
        count?,
        users: User[]
    }
}