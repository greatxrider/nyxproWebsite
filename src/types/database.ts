export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    email: string
                    full_name: string | null
                    avatar_url: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id: string
                    email: string
                    full_name?: string | null
                    avatar_url?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    email?: string
                    full_name?: string | null
                    avatar_url?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            contacts: {
                Row: {
                    id: string
                    first_name: string
                    last_name: string
                    email: string
                    company: string | null
                    message: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    first_name: string
                    last_name: string
                    email: string
                    company?: string | null
                    message: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    first_name?: string
                    last_name?: string
                    email?: string
                    company?: string | null
                    message?: string
                    created_at?: string
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
    }
} 