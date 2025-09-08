import React from "react";
import Link from "next/link";

import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

interface InPageNavProps {
  title?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  className?: string;
}

export function InPageNav({
  title = "home",
  breadcrumbs,
  className,
}: InPageNavProps) {
  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center gap-2 border-b px-4",
        className
      )}
    >
      <Breadcrumb>
        <BreadcrumbList className="mx-0 px-0">
          <BreadcrumbItem className="hidden md:block capitalize">
            <Link href="/">{title}</Link>
          </BreadcrumbItem>
          {breadcrumbs?.map((crumb, index) => (
            <React.Fragment key={`${crumb.label}-${index}`}>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="capitalize">
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
