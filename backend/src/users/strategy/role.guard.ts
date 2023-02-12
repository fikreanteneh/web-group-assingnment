import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  private requiredRole: number;

  constructor(role: number) {
    this.requiredRole = role;
  }

  static forRole(role: number) {
    return new RoleGuard(role);
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return user && user.role === this.requiredRole;
  }
}
