import { Business } from "../types/Business";
import { CategorySummary } from "../types/CategorySummary";

const categories: CategorySummary[] = [
    {
        slug: 'category_1',
        title: 'Category 1',
    },
    {
        slug: 'category_2',
        title: 'Category 2',
    },
    {
        slug: 'category_3',
        title: 'Category 3',
    }
];

const businesses: Business[] = [
    {
        id: "1",
        title: "The Port",
        category: "category_2",
        location: {
            address: {
                line1: "The Precint",
                line2: "High Stree",
                line3: "Portishead",
                line4: "North Somerset",
                postCode: "BS20 6AH"
            },
            mapPoint: {
                x: 2,
                y: 2,
            },
        },
        emailAddresses: ['robinbristoluk@yahoo.co.uk'],
        telephoneNumbers: ['07885 940663'],
    },
    {
        id: "2",
        title: "Second Business",
        category: "category_2",
        location: {
            address: {
                line1: "The Precint",
                line2: "High Stree",
                line3: "Portishead",
                line4: "North Somerset",
                postCode: "BS20 6AH"
            },
            mapPoint: {
                x: 2,
                y: 2,
            },
        },
        emailAddresses: [],
        telephoneNumbers: [],
    },
    {
        id: "3",
        title: "Third Business",
        category: "category_1",
        location: {
            address: {
                line1: "The Precint",
                line2: "High Stree",
                line3: "Portishead",
                line4: "North Somerset",
                postCode: "BS20 6AH"
            },
            mapPoint: {
                x: 2,
                y: 2,
            },
        },
        emailAddresses: [],
        telephoneNumbers: [],
    },
    {
        id: "4",
        title: "Fourth Business",
        category: "category_3",
        location: {
            address: {
                line1: "The Precint",
                line2: "High Stree",
                line3: "Portishead",
                line4: "North Somerset",
                postCode: "BS20 6AH"
            },
            mapPoint: {
                x: 2,
                y: 2,
            },
        },
        emailAddresses: [],
        telephoneNumbers: [],
    },
    {
        id: "5",
        title: "Fifth Business",
        category: "category_3",
        location: {
            address: {
                line1: "The Precint",
                line2: "High Stree",
                line3: "Portishead",
                line4: "North Somerset",
                postCode: "BS20 6AH"
            },
            mapPoint: {
                x: 2,
                y: 2,
            },
        },
        emailAddresses: [],
        telephoneNumbers: [],
    }
];

export const getCategories = (): Promise<CategorySummary[]> => {
    return Promise.resolve(categories);
}

export const getFilteredCategories = (query: object): Promise<CategorySummary[]> => {
    const parsedQuery = Object.entries(query);
    const filtered = categories.filter((category) => {
        parsedQuery.forEach(([key, value]) => {
            if (category[key as keyof CategorySummary] !== value) { return false; } 
        });

        return true;
    });

    return Promise.resolve(filtered);
}

export const getCategoryBySlug = async (slug: string): Promise<CategorySummary|undefined> => {
    return Promise.resolve(categories.find(b => b.slug === slug));
} 

export const getBusinessesInCategory = async (category_slug: string): Promise<Business[]> => {
    return Promise.resolve(businesses.filter(b => b.category === category_slug));
} 

export const getBusinessWithIdInCategory = async (id: string, category_slug: string): Promise<Business|undefined> => {
    return Promise.resolve(businesses.find(b => b.category === category_slug && b.id === id));
} 
