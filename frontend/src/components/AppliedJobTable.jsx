import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
        <div className='font-medium'></div>
        <th>
            <Table>
                <TableCaption>A List of Your Applied Jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1,2].map((item,index)=>(
                            <TableRow key={index}>
                                <TableCell>20-05-2024</TableCell>
                                <TableCell>FullStack Developer</TableCell>
                                <TableCell>Google</TableCell>
                                <TableCell className="text-right"><Badge> Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </th>
    </div>
  )
}

export default AppliedJobTable