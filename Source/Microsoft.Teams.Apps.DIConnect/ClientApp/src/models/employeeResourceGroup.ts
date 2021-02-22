﻿// <copyright file="employeeResourceGroup.ts" company="Microsoft">
// Copyright (c) Microsoft. All rights reserved.
// </copyright>

/**
* Employee resource group request object schema
*/
export class EmployeeResourceGroupEntity {
    groupType: string | undefined;
    groupName: string | undefined;
    groupDescription: string | undefined;
    groupLink: string | undefined;
    imageLink: string | undefined;
    location: string | undefined;
    includeInSearchResults: boolean | undefined;
    tags: string | undefined;
}

/**
* Employee resource group response object schema
*/
export class EmployeeResourceGroupResponse {
    groupType!: string;
    groupId!: string;
    groupName!: string;
    groupDescription!: string;
    groupLink!: string;
    imageLink!: string;
    tags: Array<string> | undefined;
    location!: string;
    includeInSearchResults!: boolean;
    matchingFrequency!: number;
    isProfileMatchingEnabled!: boolean;
}

/**
* Employee resource group update object schema
*/
export class EmployeeResourceGroupUpdate extends EmployeeResourceGroupEntity {
    groupId!: string;
    matchingFrequency!: number;
    isProfileMatchingEnabled!: boolean;
}