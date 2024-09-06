// src/components/Pagination.tsx

import React from 'react';

type PaginationProps = {
    currentPage: number;
    onPageChange: (page: number) => void;
    totalItems: number;
    itemsPerPage: number; // Кількість елементів на сторінці
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange, totalItems, itemsPerPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            for (let i = 1; i <= 7; i++) {
                pages.push(i);
            }
            pages.push('...');
            pages.push(totalPages);
        }
        return pages;
    };

    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                &lt;
            </button>
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    className={currentPage === page ? 'active' : ''}
                >
                    {page}
                </button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                &gt;
            </button>
        </div>
    );
};